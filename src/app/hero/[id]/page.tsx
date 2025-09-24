interface IProps {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function HeroPage({ params }: IProps) {
  const { id } = await params

  return (
    <div>
      <h1>Hero Page - ID: {id}</h1>
      {/* Seu conteúdo do herói aqui */}
    </div>
  )
}
