"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const errorMessages: Record<string, string> = {
    Configuration: "There is a problem with the authentication configuration.",
    AccessDenied: "You do not have permission to sign in.",
    Verification: "The sign-in link is no longer valid.",
    Default: "Something went wrong during authentication.",
}

export default function AuthErrorPage() {
    const params = useSearchParams()
    const error = params.get("error") ?? "Default"

    return (
        <div className="min-h-screen flex items-center justify-center bg-muted">
            <Card className="max-w-md w-full">
                <CardHeader>
                    <CardTitle>Authentication Error</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                        {errorMessages[error] ?? errorMessages.Default}
                    </p>

                    <Button asChild className="w-full">
                        <Link href="/auth/login">Try Again</Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}
