import { formatDate } from "@/lib/utils";
import dayjs from "dayjs";

const CommentBox = () => {
  return (
    <div className="border-b text-sm text-gray-700 py-4">
      <span>{` What about the intent to destroy some socioeconomic group? Say, it would
  affect a certain ethnical or religious group disproportionately, but
  destroying the ethnical or religious group was not the intent.`}</span>
      <span className="text-primary text-sm">{`- John Doe `}</span>
      <span className="text-gray-500 text-xs">
        {formatDate(dayjs("2024/1/31"))}
      </span>
    </div>
  );
};

export default CommentBox;
