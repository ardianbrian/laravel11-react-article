import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React from "react";

interface Audit {
    id: number;
    event: string;
    user_id: number;
    user_agent: string;
    ip_address: string;
    created_at: string;
    auditable: {
        id: number;
        type: string;
        title?: string; // Assuming 'title' is available for articles
        content?: string; // Assuming 'content' is available for articles
    };
}

interface AuditPagesProps {
    audits: Audit[];
}

const Audits: React.FC<AuditPagesProps> = ({ audits }) => {
    if (!audits || audits.length === 0) {
        return (
            <AuthenticatedLayout
                header={
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Audit Logs
                    </h2>
                }
            >
                <Head title="Audit Logs" />

                <div className="py-12">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">
                                <h3 className="text-lg font-bold">
                                    No Audit Logs Available
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        );
    }

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Audit Logs
                </h2>
            }
        >
            <Head title="Audit Logs" />

            <div className="py-6">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <table className="min-w-full bg-white border border-gray-300">
                                <thead>
                                    <tr>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                                            Event
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                                            User ID
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                                            Title
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                                            Content
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                                            IP Address
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                                            User Agent
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                                            Timestamp
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {audits.map((audit) => (
                                        <tr key={audit.id} className="border-t">
                                            <td className="px-6 py-4 text-sm text-gray-700">
                                                {audit.event}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-700">
                                                {audit.user_id}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-700">
                                                {audit.auditable?.title ||
                                                    "N/A"}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-700">
                                                {audit.auditable?.content ||
                                                    "N/A"}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-700">
                                                {audit.ip_address}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-700">
                                                {audit.user_agent}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-700">
                                                {new Date(
                                                    audit.created_at
                                                ).toLocaleString()}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Audits;
