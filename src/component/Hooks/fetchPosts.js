import { useQuery } from 'react-query'
const fetchPostsFunc = async (page) => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_start=${page * 10 - 10
        }&_limit=10`
    )
    return res.json()
}
export const fetchPosts = (page) => {
    const { isLoading, data, isError, error } = useQuery(['posts', page], () => fetchPostsFunc(page

    ), {
        refetchOnWindowFocus: false,
        staleTime: 300000,
    })
    if (isLoading) {
        return "loading"
    }
    if (isError) {
        return "error"
    }
    else return data
}
