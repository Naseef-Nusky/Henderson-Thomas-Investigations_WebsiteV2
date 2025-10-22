import React from 'react';

const Blogs = () => {
  const blogPosts = [
    {
      title: "Understanding Private Investigation Laws in the UK",
      excerpt: "Learn about the legal framework governing private investigations and what investigators can and cannot do.",
      date: "October 15, 2024",
      readTime: "5 min read",
      category: "Legal"
    },
    {
      title: "Signs You May Need a Private Investigator",
      excerpt: "Discover common situations where hiring a professional investigator can help you find answers and peace of mind.",
      date: "October 10, 2024",
      readTime: "4 min read",
      category: "Tips"
    },
    {
      title: "How to Choose the Right Private Investigator",
      excerpt: "Essential factors to consider when selecting a private investigator to ensure you get professional, reliable service.",
      date: "October 5, 2024",
      readTime: "6 min read",
      category: "Guide"
    },
    {
      title: "The Importance of Confidentiality in Investigations",
      excerpt: "Why discretion and confidentiality are crucial in private investigations and how we protect your privacy.",
      date: "September 28, 2024",
      readTime: "3 min read",
      category: "Privacy"
    },
    {
      title: "Technology in Modern Private Investigations",
      excerpt: "How modern technology enhances investigation capabilities while maintaining ethical standards and legal compliance.",
      date: "September 20, 2024",
      readTime: "7 min read",
      category: "Technology"
    },
    {
      title: "What to Expect During a Surveillance Investigation",
      excerpt: "A detailed look at what happens during surveillance operations and how investigators gather evidence.",
      date: "September 15, 2024",
      readTime: "5 min read",
      category: "Process"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight font-mont tracking-tight">
              Investigation Blog
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100 leading-relaxed">
              Insights, tips, and information about private investigations
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 text-white mb-12">
              <div className="flex items-center mb-4">
                <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </span>
                <span className="ml-4 text-blue-100">{blogPosts[0].date}</span>
                <span className="ml-4 text-blue-100">{blogPosts[0].readTime}</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">{blogPosts[0].title}</h2>
              <p className="text-xl text-blue-100 mb-6">{blogPosts[0].excerpt}</p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with our latest insights and expert advice
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <button className="mt-4 text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Subscribe to our newsletter for the latest investigation insights and tips
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
