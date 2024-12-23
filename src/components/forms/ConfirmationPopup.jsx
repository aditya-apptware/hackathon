import React from "react";
import { useStepperContext } from "../../context/StepperContext";

const ConfirmationPopup = () => {
  const { formData } = useStepperContext();

  return (
    <div className="border p-6 rounded-lg shadow-lg bg-white max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Confirm Submission</h2>
      <div className="text-left space-y-4">
        <div>
          <h3 className="font-semibold">Team Name:</h3>
          <p>{formData.teamName || "Not Provided"}</p>
        </div>
        <div>
          <h3 className="font-semibold">College Name:</h3>
          <p>{formData.collegeName || "Not Provided"}</p>
        </div>
        <div>
          <h3 className="font-semibold">Team Members:</h3>
          {formData.members.map((member, index) => (
            <div key={index} className="mt-2">
              <p>
                <span className="font-semibold">Member {index + 1}:</span>{" "}
                {member.fullName || "Not Provided"} - {member.email || "No Email"} -{" "}
                {member.mobile || "No Mobile"}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          onClick={() => alert("Edit data not implemented yet!")}
        >
          Edit
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          onClick={() => alert("Data submitted successfully!")}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ConfirmationPopup;
