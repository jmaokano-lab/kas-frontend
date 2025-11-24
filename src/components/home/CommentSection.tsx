import { useState } from "react";

const CommentSection = () => {
  // Initial comments state
  const [comments, setComments] = useState<
    {
      name: string;
      date: string;
      text: string;
      avatar: string;
      replies: string[]; // Ensure replies is typed as an array of strings
      showReplyInput: boolean;
    }[]
  >([
    {
      name: "Alex Aster",
      date: "April 27, 2024",
      text: "Concept Gaming Tournament Is Essentially The Same As Any Other Sport Everyone There Is Competing.",
      avatar: "/images/avatar1.jpg", // Add your image path here
      replies: [], // Initialize replies as an empty array of strings
      showReplyInput: false, // Control the visibility of the reply input
    },
    {
      name: "Emily Blunt",
      date: "April 27, 2024",
      text: "Concept Gaming Tournament Is Essentially The Same As Any Other Sport Everyone There Is Competing.",
      avatar: "/images/avatar2.jpg", // Add your image path here
      replies: [],
      showReplyInput: false,
    },
    {
      name: "Thomas Shelby",
      date: "April 27, 2024",
      text: "Concept Gaming Tournament Is Essentially The Same As Any Other Sport Everyone There Is Competing.",
      avatar: "/images/avatar3.jpg", // Add your image path here
      replies: [],
      showReplyInput: false,
    },
  ]);

  const [newComment, setNewComment] = useState("");
  const [reply, setReply] = useState<{ [key: number]: string }>({});

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment(e.target.value);
  };

  const handleReplyChange = (
    index: number,
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setReply({ ...reply, [index]: e.target.value });
  };

  const handleSubmit = () => {
    const newCommentData = {
      name: "New User",
      date: new Date().toLocaleDateString(),
      text: newComment,
      avatar: "/images/default-avatar.jpg",
      replies: [],
      showReplyInput: false,
    };
    setComments([...comments, newCommentData]);
    setNewComment("");
  };

  const handleReplySubmit = (index: number) => {
    const updatedComments = [...comments];
    updatedComments[index].replies.push(reply[index]); // Correctly push the reply
    setComments(updatedComments);
    setReply({ ...reply, [index]: "" });
  };

  const toggleReplyInput = (index: number) => {
    const updatedComments = [...comments];
    updatedComments[index].showReplyInput =
      !updatedComments[index].showReplyInput;
    setComments(updatedComments);
  };

  return (
    <div className="p-8 bg-gray-100 shadow-md rounded-lg ">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">3 Comments</h2>

      {/* Display Comments */}
      <div className="space-y-6">
        {comments.map((comment, index) => (
          <div
            key={index}
            className="flex space-x-4 items-start bg-[#1f4d4d] p-4 rounded-lg"
          >
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img
                src={comment.avatar}
                alt="User Avatar"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <h3 className="font-semibold text-white">{comment.name}</h3>
                <span className="text-sm text-gray-300">{comment.date}</span>
              </div>
              <p className="text-md text-gray-100 italic mt-2">
                {comment.text}
              </p>

              {/* Reply Button */}
              <button
                onClick={() => toggleReplyInput(index)}
                className="text-yellow-400 mt-2 inline-flex items-center"
              >
                <span className="mr-1">Reply</span>
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 9l3 3-3 3M5 12h14"
                  ></path>
                </svg>
              </button>

              {/* Reply Input */}
              {comment.showReplyInput && (
                <div className="mt-4 bg-[#2b6e6e] p-4 rounded-lg">
                  <textarea
                    value={reply[index]}
                    onChange={(e) => handleReplyChange(index, e)}
                    className="w-full p-4 border border-gray-300 rounded-lg"
                    rows={2}
                    placeholder="Write a reply..."
                  />
                  <button
                    onClick={() => handleReplySubmit(index)}
                    className="mt-2 px-6 py-2 bg-green-600 text-white rounded-full"
                  >
                    Submit Reply
                  </button>
                </div>
              )}

              {/* Display Replies */}
              {comment.replies.length > 0 && (
                <div className="mt-4 ml-8 space-y-4">
                  {comment.replies.map((replyText, idx) => (
                    <div
                      key={idx}
                      className="flex space-x-4 items-start bg-[#2b6e6e] p-4 rounded-lg"
                    >
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img
                          src={comment.avatar}
                          alt="User Avatar"
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-100">{replyText}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Comment Input */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">
          Leave a Comment
        </h3>
        <textarea
          value={newComment}
          onChange={handleCommentChange}
          className="w-full p-4 border border-[#119d3e] rounded-lg bg-white"
          rows={4}
          placeholder="Your comments..."
        />
        <button
          onClick={handleSubmit}
          className="mt-4 px-6 py-2 bg-green-600 text-white rounded-full"
        >
          Submit Comment
        </button>
      </div>
    </div>
  );
};

export default CommentSection;
