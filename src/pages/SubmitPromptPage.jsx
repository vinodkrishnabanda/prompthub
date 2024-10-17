import React, { useState } from 'react';

function SubmitPromptPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    tags: '',
    content: '',
    difficulty: '',
    estimatedTime: '',
    resources: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Submit a Prompt</h1>
      
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
              <div className="mb-4">
                <label htmlFor="title" className="block mb-2">Prompt Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="category" className="block mb-2">Category</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                >
                  <option value="">Select a category</option>
                  <option value="writing">Writing</option>
                  <option value="coding">Coding</option>
                  <option value="design">Design</option>
                  {/* Add more categories */}
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="tags" className="block mb-2">Tags (comma-separated)</label>
                <input
                  type="text"
                  id="tags"
                  name="tags"
                  value={formData.tags}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <button type="button" onClick={nextStep} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Next
              </button>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Prompt Content</h2>
              <div className="mb-4">
                <label htmlFor="content" className="block mb-2">Prompt Content</label>
                <textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  rows="6"
                  required
                ></textarea>
              </div>
              <div className="flex justify-between">
                <button type="button" onClick={prevStep} className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400">
                  Previous
                </button>
                <button type="button" onClick={nextStep} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Additional Details</h2>
              <div className="mb-4">
                <label htmlFor="difficulty" className="block mb-2">Difficulty Level</label>
                <select
                  id="difficulty"
                  name="difficulty"
                  value={formData.difficulty}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                >
                  <option value="">Select difficulty</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="estimatedTime" className="block mb-2">Estimated Completion Time</label>
                <input
                  type="text"
                  id="estimatedTime"
                  name="estimatedTime"
                  value={formData.estimatedTime}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  placeholder="e.g., 30 minutes"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="resources" className="block mb-2">Required Resources or Tools</label>
                <textarea
                  id="resources"
                  name="resources"
                  value={formData.resources}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  rows="3"
                ></textarea>
              </div>
              <div className="flex justify-between">
                <button type="button" onClick={prevStep} className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400">
                  Previous
                </button>
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                  Submit Prompt
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default SubmitPromptPage;