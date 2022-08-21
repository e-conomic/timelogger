import React from "react";

export default function Table() {
    return (
        <table className="table-fixed w-full">
            <thead className="bg-gray-200">
                <tr>
                    <th className="border px-4 py-2 w-12">#</th>
                    <th className="border px-4 py-2">Project Name</th>
                    <th className="border px-4 py-2">abc</th>
                    <th className="border px-4 py-2">xyz</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border px-4 py-2 w-12">1</td>
                    <td className="border px-4 py-2">Project 1</td>
                    <td className="border px-4 py-2">abc</td>
                    <td className="border px-4 py-2">xyz</td>
                </tr>
                <tr>
                    <td className="border px-4 py-2 w-12">2</td>
                    <td className="border px-4 py-2">Project 2</td>
                    <td className="border px-4 py-2">abc</td>
                    <td className="border px-4 py-2">xyz</td>
                </tr>
                <tr>
                    <td className="border px-4 py-2 w-12">3</td>
                    <td className="border px-4 py-2">Project 3</td>
                    <td className="border px-4 py-2">abc</td>
                    <td className="border px-4 py-2">xyz</td>
                </tr>
            </tbody>
        </table>
    );
}
