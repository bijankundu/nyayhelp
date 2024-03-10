import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const AddAnswerContainer = () => {
  return (
    <div className="mt-5 flex flex-col gap-4">
      <Textarea rows={6} placeholder="Your answer ..." />
      <div className="flex gap-2">
        <Button>Post your answer</Button>
      </div>
    </div>
  );
};

export default AddAnswerContainer;
