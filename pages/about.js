function About({ data }) {
  return <div>{data.message}</div>;
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  const res = await fetch(`http://194.163.141.244`);
  const data = await res.json();
  console.log("tesrrrrrrr", data);
  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default About;
