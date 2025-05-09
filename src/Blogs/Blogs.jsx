import React from 'react';

const blogsData = {
  "Top Articles": [
    {
      title: "Understanding Anxiety",
      description: "Anxiety triggers include stress and social situations. Coping methods are deep breathing, exercise, and support. CBT helps change negative thoughts.",
      image: "https://img.freepik.com/free-vector/flat-design-schizophrenia-illustration_23-2149375309.jpg"
    },
    {
      title: "Workplace Mental Health",
      description: "Set clear boundaries, practice mindfulness, and manage stress. Prioritize work-life balance, foster supportive relationships, and use time management to stay focused.",
      image: "https://img.freepik.com/free-photo/medium-shot-tired-man-with-laptop-work_23-2149366510.jpg"
    }
  ],
  "Self-Care": [
    {
      title: "5 Self-Care Habits for Your Daily Routine",
      description: "Incorporating small habits like gratitude, journaling, breathing exercises, and staying active can help you feel more in control.",
      image: "https://img.freepik.com/free-vector/organic-flat-design-about-me-concept_23-2148899199.jpg"
    },
    {
      title: "Building Resilience",
      description: "Develop emotional strength by practicing self-awareness, setting goals, seeking support, and learning from tough experiences.",
      image: "https://img.freepik.com/free-photo/business-strategy-concept-white-background-flat-lay-man-building-castle-from-wooden-blocks_176474-7628.jpg"
    }
  ],
  "Anxiety": [
    {
      title: "How to Deal With Crippling Anxiety",
      description: "Learn techniques like breathing exercises, positive self-talk, grounding strategies, and professional therapy to regain control.",
      image: "https://img.freepik.com/free-photo/front-view-psychologist-consulting-patient_23-2148567366.jpg"
    },
    {
      title: "Diet that Ease Anxiety Symptoms",
      description: "Certain foods rich in magnesium, omega-3, and probiotics can support mental health and ease anxiety symptoms.",
      image: "https://img.freepik.com/free-photo/person-using-dry-shampoo_52683-132227.jpg"
    }
  ]
};

const Blogs = () => {
  return (
    <div className="flex justify-center pt-32 bg-[#cbd5e1] min-h-screen pb-20">
      <div className="max-w-7xl px-4 w-full">
        <h1 className="text-5xl font-bold pb-10 mb-20 text-center tracking-wide border-b-2  border-white text-white">BLOGS</h1>

        {Object.entries(blogsData).map(([category, articles], index) => (
          <div key={index} className="w-full mb-20">
            <h2 className="text-3xl font-semibold text-white mb-10 pb-2">
              {category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {articles.map((article, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{article.description}</p>
                    <button className="text-sm text-gray-700 hover:underline font-medium">
                      Read more →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
