import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
            hi, im robin  
      </h1>
      <p className="mb-4">
        {`I'm a data scientist. I find joy learning models architectures and 
        implementing them in production. I also enjoy drawing on my ipad. Trying 
        to find a way to combine both passions.`}
      </p>
      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  )
}
