const Layout: React.FC = ({ children }) => {
  return (
    <>
      <section className="mb-40 flex flex-col items-center justify-center">
        {children}
      </section>
    </>
  )
}

export default Layout
