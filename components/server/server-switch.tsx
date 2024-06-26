import {UserButton} from "@clerk/nextjs";

export function ServerSwitch() {
    return (
        <div
            className="group px-auto py-4 flex items-center gap-x-2 w-full hover:bg-neutral-900 dark:hover:bg-neutral-900 transition">
            <div className="pl-2 mt-auto flex-col gap-y-4">

                <UserButton
                    afterSignOutUrl="/"
                    appearance={{
                        elements: {
                            avatarBox: "h-[42px] w-[42px]"
                        }
                    }}
                />

            </div>
        </div>
    )
}