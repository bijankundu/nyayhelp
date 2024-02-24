import Link from "next/link";
import { MessageSquareText, ThumbsUp } from "lucide-react";

const ForumCard = () => {
  return (
    <div className="border rounded-lg p-4">
      <h2 className="text-xl font-bold">What is contract law?</h2>
      <p className="text-gray-600">
        Contract law is a body of law that governs, enforces, and interprets
        agreements related to an exchange of goods, services, properties, or
        money.
      </p>
      <div className="flex items-center justify-between mt-4">
        <Link className="text-blue-500 hover:underline" href="#">
          Read More
        </Link>
        <div className="flex gap-5">
          <div className="text-gray-600 flex gap-1 text-sm items-center">
            <ThumbsUp size={"18px"} />
            <span>3</span>
          </div>
          <div className="text-gray-600 flex gap-1 text-sm items-center">
            <MessageSquareText size={"18px"} />
            <span>13</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumCard;
