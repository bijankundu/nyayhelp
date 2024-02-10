import Link from "next/link";

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
        <span className="text-gray-600">3 Answers</span>
      </div>
    </div>
  );
};

export default ForumCard;
