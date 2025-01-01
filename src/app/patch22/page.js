// src/app/patch22/Patch22Layout.js
import React from "react";
import Link from "next/link";

export default function Patch22Layout({ children }) {
  return (
    <div className="flex">
      {/* Sidebar or layout content */}
      <nav className="bg-gray-800 text-white w-1/4 p-6">
        <h2 className="text-2xl font-bold mb-8">PATCH22</h2>
        <ul>
          <li className="mb-4">
            <Link href="/patch22/skillbridge">SkillBridge</Link>
          </li>
          <li className="mb-4">
            <Link href="/patch22/patches">Patches</Link>
          </li>
        </ul>
      </nav>

      {/* Main content */}
      <main className="w-3/4 p-8">{children}</main>
    </div>
  );
}
