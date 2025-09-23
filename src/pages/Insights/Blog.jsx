import React from "react";

export default function Blog() {
  const blogs = [
    {
      id: 1,
      title: "How Red Teaming Strengthens Your Cybersecurity",
      desc: "Discover how simulated attacks expose hidden weaknesses and prepare enterprises for real-world adversaries.",
      img: "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?auto=format&fit=crop&w=1400&q=80",
      link: "/blog/red-teaming",
    },
    {
      id: 2,
      title: "Top 5 Cyber Threats Enterprises Face in 2025",
      desc: "From ransomware-as-a-service to AI-powered attacks—learn what’s next and how to stay ahead of hackers.",
      img: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=1400&q=80",
      link: "/blog/cyber-threats-2025",
    },
    {
      id: 3,
      title: "Case Study: Securing a Global Fintech Enterprise",
      desc: "Read how Iron & Byte helped a multinational fintech mitigate risks and safeguard customer data with advanced offensive security.",
      img: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&w=1400&q=80",
      link: "/blog/fintech-case-study",
    },
  ];

  return (
    <section className="bg-[#0f0a1f] text-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-green-400 uppercase tracking-wider text-sm font-semibold mb-3">
          Insights → Blog
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Latest Cybersecurity Insights & Case Studies
        </h3>
        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Stay ahead of cyber threats with expert insights, in-depth case studies,
          and actionable strategies from Iron & Byte’s offensive security experts.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-[#1a103d] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
          >
            <img
              src={blog.img}
              alt={blog.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h4 className="text-xl font-semibold mb-3">{blog.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {blog.desc}
              </p>
              <a
                href={blog.link}
                className="inline-block bg-gradient-to-r from-[#52e257] to-[#562eab] text-white px-5 py-2 rounded-lg font-medium shadow-md hover:opacity-95 transition"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center mt-14">
        <a
          href="/blog"
          className="inline-block bg-gradient-to-r from-[#52e257] to-[#562eab] text-white px-8 py-3 rounded-full font-semibold shadow-md hover:opacity-90 transition"
        >
          Explore All Blogs
        </a>
      </div>
    </section>
  );
}
