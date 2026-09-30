import MessageLayout from "../../components/MessageLayout"
import { useParams } from "react-router"
import { useQuery } from "@tanstack/react-query"
import Loading from "../../components/Loading"
import { getAllUserData } from "../../services/users"

function Chat() {
  const { userId } = useParams()

  const { isPending, isError, error, data } = useQuery({
    queryKey: ["chat", userId],
    queryFn: () => getAllUserData(userId!),
  })

  if (isPending) return <Loading />

  if (isError) return <div>{error.message}</div>

  return <MessageLayout user={data.data} />
}

export default Chat
