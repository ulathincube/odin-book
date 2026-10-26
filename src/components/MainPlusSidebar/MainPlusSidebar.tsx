import Main from "../Main"
import RightSidebar from "../RightSidebar"
import { useQuery } from "@tanstack/react-query"
import { getAllPosts } from "../../services/posts"
import { getAllUsers } from "../../services/users"
import Loading from "../Loading"
import Error from "../Error"

function MainPlusSidebar() {
  const allPostsQuery = useQuery({
    queryKey: ["allPosts"],
    queryFn: getAllPosts,
    retry: 1,
  })

  const allUsersQuery = useQuery({
    queryKey: ["allUsers"],
    queryFn: getAllUsers,
    retry: 1,
  })

  const refetch = () => {
    allPostsQuery.refetch()
    allUsersQuery.refetch()
  }

  if (allPostsQuery.isPending || allUsersQuery.isPending) return <Loading />
  if (allPostsQuery.isError || allUsersQuery.isError)
    return <Error refetch={refetch} />

  return (
    <>
      <Main posts={allPostsQuery.data.data} />
      <RightSidebar users={allUsersQuery.data.data} />
    </>
  )
}

export default MainPlusSidebar
