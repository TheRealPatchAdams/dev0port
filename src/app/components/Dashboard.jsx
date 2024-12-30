import { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
    const [orders, setOrders] = useState([]);
    const [totalItemsSold, setTotalItemsSold] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get("/api/shopify-orders");
                setOrders(response.data.orders);
                setTotalItemsSold(response.data.totalItemsSold);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching orders:", error);
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    const calculateOverdueDays = (createdAt) => {
        const orderDate = new Date(createdAt);
        const dueDate = new Date(orderDate);
        dueDate.setDate(orderDate.getDate() + 7); // 7-day completion window
        const today = new Date();
        const overdueDays = Math.max(0, Math.floor((today - dueDate) / (1000 * 60 * 60 * 24)));
        return overdueDays;
    };

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <h1>Custom Orders Dashboard</h1>
            <h2>Total Items Sold This Year: {totalItemsSold}</h2>
            <table>
                <thead>
                    <tr>
                        <th>Customer Name</th>
                        <th>Order Date</th>
                        <th>Overdue (Days)</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.id}>
                            <td>{order.customer?.first_name} {order.customer?.last_name}</td>
                            <td>{new Date(order.created_at).toLocaleDateString()}</td>
                            <td>{calculateOverdueDays(order.created_at)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;
