import { useQueries } from 'react-query'
const fetchUserFunc = async (id) => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
    )
    return res.json()
}
export const fetchUsers = (postsData) => {
    let usersIds = []
    typeof postsData === 'object' && postsData.forEach(post => {
        usersIds.push(post.userId)
    })
    usersIds = [...new Set(usersIds)]
    const queryResult = useQueries(usersIds.map(id => {
        return {
            queryKey: ['user', id],
            queryFn: () => fetchUserFunc(id),
            enabled: !!postsData,
            refetchOnWindowFocus: false,
            staleTime: 300000,
            keepPreviousData: true
        }
    }
    ))
    if (queryResult[0]?.isLoading) {
        return 'loading'
    }
    if (queryResult[0]?.isError) {
        return "error"
    }
    let usersData = []
    queryResult.forEach(user => {
        usersData.push(user.data)

    })

    return usersData
}

