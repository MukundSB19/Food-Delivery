import { Stack } from "expo-router";
import { SplashGuard } from "@/components/shared";

export default function AdminLayout() {
    return (
        <SplashGuard requiredRole="admin">
            <Stack />
        </SplashGuard>
    );
}
