import React, { useState } from "react";

const AddLinkPopup = ({ onClose, onSubmit }) => {
  const [form, setForm] = useState({
    name: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.name) return;
    onSubmit(form);
    setForm({ name: ""});
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 space-y-4">
        <h2 className="text-lg font-semibold text-gray-700">Add New Link</h2>
        <input
          type="text"
          name="name"
          placeholder="Label Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
        <div className="flex justify-end space-x-2">
          <button
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={handleSubmit}
          >
            Add
          </button>
        </div>
      </div>
      {showPopup && (
        <AddLinkPopup
            onClose={() => setShowPopup(false)}
            onSubmit={(formData) => {
            const newData = {
                _id: Date.now().toString(),
                ...formData,
            };
            setDatas((prev) => [...prev, newData]);
            setShowPopup(false);
            }}
        />
        )}
    </div>
  );
};

export default AddLinkPopup;
