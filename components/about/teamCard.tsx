import Image from "next/image";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { shimmer, toBase64 } from "@/lib/image";

const TeamCard = () => {
  return (
    <Card className="h-full flex flex-col justify-between items-center">
      <CardHeader className="flex justify-center">
        <div className="rounded">
          <Image
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(100, 100)
            )}`}
            src={"https://avatar.iran.liara.run/public"}
            alt="blog"
            height={100}
            width={100}
            className="rounded"
          />
        </div>
      </CardHeader>
      <CardContent>
        <h2 className="text-lg font-bold text-center">Dr. Random</h2>
        <p className="text-gray-500 text-center">Some Designation</p>
      </CardContent>
    </Card>
  );
};

export default TeamCard;
