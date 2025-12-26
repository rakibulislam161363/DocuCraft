

async function  RakibId({params}) {
  const {id} = await params;
  return (
    <div className="text-2xl text-red-600">{id} params id</div>
  )
}

export default RakibId