import Avatar from "@/components/Avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const CreateChatbot = () => {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row md:space-x-10 bg-white p-8 rounded-md m-10">
      <Avatar seed="create-chatbot" />

      <div className="md:mt-0 mt-3">
        <h1 className="text-xl lg:text-3xl font-semibold">Create</h1>
        <h2 className="font-light">
          Create a new chatbot to assit you in your conversation with your
          customer
        </h2>

        <form className="flex flex-col md:flex-row gap-2 mt-5">
          <Input
            placeholder="Chatbot Name.."
            className="max-w-lg"
            type="text"
            required
          />
          <Button>Create Chatbot</Button>
        </form>
      </div>
    </div>
  );
};

export default CreateChatbot;
