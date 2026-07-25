import { Skeleton } from "@/components/ui/skeleton";

export default function ProductCardSkeleton() {
  return (
    <div className="flex flex-col rounded-2xl border border-border bg-surface overflow-hidden shadow-[0_2px_16px_-4px_rgba(43,33,24,0.06)]">
      <Skeleton className="aspect-[4/5] rounded-none" />
      <div className="flex flex-col flex-1 px-5 pb-5 pt-4 space-y-4">
        <div className="flex items-center justify-between">
          <Skeleton className="h-3 w-16" />
          <Skeleton className="h-3 w-20" />
        </div>
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-1/2" />
        <div className="flex items-end justify-between pt-2">
          <Skeleton className="h-5 w-20" />
          <Skeleton className="h-4 w-16" />
        </div>
      </div>
    </div>
  );
}