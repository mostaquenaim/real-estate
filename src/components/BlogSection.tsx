import { useQuery } from '@apollo/client'
import { GET_RECENT_POSTS } from '@/lib/queries'

const BlogSection = () => {
  const { loading, error, data } = useQuery(GET_RECENT_POSTS, { variables: { limit: 3 } })

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Latest Updates</h2>
          <div className="w-28 h-1 rounded-full bg-gradient-to-r from-green-500 to-yellow-400 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data?.posts.map((post) => (
            <article key={post.slug} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src={post.coverImage.url} alt={post.title} className="w-full h-48 object-cover"/>
              <div className="p-6">
                <div className="text-yellow-500 text-sm mb-2">{post.date}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="text-green-600 font-medium hover:underline">
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/blog">
            <button className="bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold px-8 py-3 rounded-lg hover:shadow-lg transition-all">
              View All Articles
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}