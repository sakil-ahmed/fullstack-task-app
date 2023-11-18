'use client'
import "@/styles/main.scss";
import {Poppins} from "next/font/google";
import React from "react";
import {ClientProvider} from "@/app/AppLayout/ClientProvider";
import {persistStore} from "@/features/auth/logic/persist.store";
import {authStore} from "@/features/auth/logic/auth.store";
import {taskStore} from "@/features/task/logic/task.store";


const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
});

persistStore(authStore, "AUTH");
persistStore(taskStore, "TASK");

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className={poppins.className}>
        <ClientProvider>

            {children}

        </ClientProvider>
        </body>
        </html>
    );
}
