import { UserButton } from "@clerk/nextjs";

export const Actions = async () => {
  return (
    <div className="flex items-center justify-end gap-x-2 ml-4 lg:ml-0">
      <UserButton />
    </div>
  );
};
