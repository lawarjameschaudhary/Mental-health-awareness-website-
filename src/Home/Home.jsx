import React from 'react'
import Line from '../Line/Line'

const Home = () => {
  return (
    <div>

      {/* Hero Section */}
      <div className='flex justify-center bg-gray-300 px-4'>
        <div className='w-full max-w-7xl'>

          <div className='flex flex-col-reverse lg:flex-row justify-between items-center min-h-[60vh] md:min-h-[100vh] gap-10 py-10 md:pt-0 pt-40'>

            {/* Text Content */}
            <div className='flex flex-col gap-6 text-center lg:text-left w-full lg:w-1/2'>
              <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight'>
                Empower Your Mind,
                <br className='hidden sm:block' />
                One Step at a Time
              </h1>
              <button className='bg-button1 w-full sm:w-auto py-3 px-6 font-medium text-lg rounded-md'>
                Find a Therapist
              </button>
            </div>

            {/* Image Content */}
            <div className='flex justify-center w-full lg:w-1/2'>
              <img 
                src="https://img.freepik.com/premium-photo/cartoon-illustration-cute-woman-making-yoga-pose_776674-995621.jpg?ga=GA1.1.255780563.1737648427&semt=ais_hybrid&w=740" 
                alt="Yoga illustration" 
                className='rounded-md w-full max-w-sm sm:max-w-md lg:max-w-lg'
              />
            </div>

          </div>
        </div>
      </div>

      {/* Quiz Section */}
      <div className='flex justify-center px-4 py-16 sm:py-20'>
        <div className='w-full max-w-4xl flex flex-col justify-center items-center gap-6 text-center'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold leading-snug'>
            Your journey to a brighter mind starts here.
          </h2>
          <p className='text-base sm:text-lg md:text-xl text-gray-700 max-w-5xl'>
            Take our mental health quiz and get matched with the right therapist for your needs.
          </p>
          <button className='bg-button1 px-6 sm:px-10 md:px-12 py-3 rounded-md text-base sm:text-lg font-medium'>
            Take Free Quiz
          </button>
        </div>
      </div>

      {/* Article Section */}
      <div className='flex justify-center px-2 sm:px-4 py-16 sm:py-20 bg-gray-300'>
        <div className='w-full max-w-screen-xl flex flex-col items-center gap-14'>

          {/* Header */}
          <h2 className='text-2xl sm:text-3xl font-semibold'>Latest Articles</h2>

          {/* Article Cards */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 w-full'>
            {[
              {
                title: 'Understanding Anxiety',
                img: 'https://cdn.pixabay.com/photo/2021/06/29/07/05/woman-6373370_1280.jpg',
                desc: 'Anxiety triggers include stress and social situations. Coping methods are deep breathing, exercise, and support. CBT helps change negative thoughts. A balanced lifestyle reduces anxiety.'
              },
              {
                title: 'Workplace Mental Health',
                img: 'https://img.freepik.com/free-photo/medium-shot-tired-man-with-laptop-work_23-2149366510.jpg?ga=GA1.1.255780563.1737648427&semt=ais_hybrid&w=740',
                desc: 'Set clear boundaries, practice mindfulness, and manage stress. Prioritize work-life balance, foster supportive relationships, and use time management to stay focused and resilient at work.'
              },
              {
                title: 'Building Resilience',
                img: 'https://img.freepik.com/free-vector/isaac-newton-sitting-apple-tree_1308-96274.jpg?ga=GA1.1.255780563.1737648427&semt=ais_hybrid&w=740',
                desc: 'Develop emotional strength by practicing self-awareness, embracing challenges, maintaining a positive mindset, seeking support, and learning from experience to boost adaptability and resilience.'
              }
            ].map((article, i) => (
              <div key={i} className="bg-white rounded-md shadow-md hover:shadow-xl transition duration-300 ease-in-out group">
                <div className="h-52 bg-gray-200 mb-4 rounded-md overflow-hidden">
                  <img src={article.img} alt={article.title} className="w-full h-full object-cover rounded-t-md group-hover:scale-105 transition duration-300 ease-in-out" />
                </div>
                <div className='p-6 flex flex-col h-[300px] justify-between'>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
                    <p className="text-gray-600 text-sm">{article.desc}</p>
                  </div>
                  <div className='flex mt-4'>
                    <button className=' text-sm font-medium flex items-center gap-1 hover:underline hover:text-blue-800 transition'>
                      <span>Read More</span>
                      <img src="https://cdn-icons-png.flaticon.com/128/709/709586.png" alt="arrow" className='w-3' />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Chatbot Section */}
      <div className='flex justify-center px-4 py-16 sm:py-20'>
        <div className='w-full max-w-4xl flex flex-col justify-center items-center gap-6 text-center'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold leading-snug'>
            A Chatbot with a listening ear for your feelings
          </h2>
          <p className='text-base sm:text-lg md:text-xl text-gray-700 max-w-5xl'>
            Share your thoughts and let us help guide you through moments with empathy and support.
          </p>
          <button className='bg-button1 px-6 sm:px-10 md:px-12 py-3 rounded-md text-base sm:text-lg font-medium'>
            Start Chatting
          </button>
        </div>
      </div>

      <Line />
    </div>
  )
}

export default Home
