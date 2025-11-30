import { Settings as SettingsIcon, User, Bell, Lock, CreditCard } from 'lucide-react';

export function SettingsView() {
    return (
        <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Settings</h2>

            <div className="space-y-4">
                {/* Account Settings */}
                <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <User className="w-5 h-5 text-blue-600" />
                        <h3 className="text-lg font-semibold">Account Settings</h3>
                    </div>
                    <div className="space-y-3">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="your.email@example.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Your Name"
                            />
                        </div>
                    </div>
                </div>

                {/* Notifications */}
                <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <Bell className="w-5 h-5 text-blue-600" />
                        <h3 className="text-lg font-semibold">Notifications</h3>
                    </div>
                    <div className="space-y-3">
                        <label className="flex items-center gap-3">
                            <input type="checkbox" className="w-4 h-4 text-blue-600" defaultChecked />
                            <span className="text-gray-700">Email notifications</span>
                        </label>
                        <label className="flex items-center gap-3">
                            <input type="checkbox" className="w-4 h-4 text-blue-600" defaultChecked />
                            <span className="text-gray-700">Order updates</span>
                        </label>
                        <label className="flex items-center gap-3">
                            <input type="checkbox" className="w-4 h-4 text-blue-600" />
                            <span className="text-gray-700">Promotional emails</span>
                        </label>
                    </div>
                </div>

                {/* Security */}
                <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <Lock className="w-5 h-5 text-blue-600" />
                        <h3 className="text-lg font-semibold">Security</h3>
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        Change Password
                    </button>
                </div>

                {/* Payment Methods */}
                <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <CreditCard className="w-5 h-5 text-blue-600" />
                        <h3 className="text-lg font-semibold">Payment Methods</h3>
                    </div>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        Add Payment Method
                    </button>
                </div>
            </div>
        </div>
    );
}
