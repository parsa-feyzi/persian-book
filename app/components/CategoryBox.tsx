interface I_Props { logo: React.ReactNode, title: string, href: string }

function CategoryBox({ logo, title, href }: I_Props) {
  return (
    <div className="flex flex-col justify-center gap-4">
        <div className="size-12 rounded-full grid place-content-center">
            {logo}
        </div>
        <div></div>
    </div>
  )
}

export default CategoryBox