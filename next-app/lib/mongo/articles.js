import clientPromise from ".";

let client
let db
let articles

async function init() {
    if (db) return
    try{
        client = await clientPromise
        //console.log(client)
        db = await client.db()
       //console.log(db)
        articles = await db.collectoion('articles')
        console.log(articles)
    } catch (error) {
        throw new Error('Failed to establish connection to the database')
    }
}

export async function getArticles() {
    try{
        if (!articles) await init()
        const result = await articles
            .find({})
            .limit(1)
            .map(user => ({ ...user, _id: user._id.toString() }))
            .toArray()
        
            return { articles: result }
    } catch (error) {
        return { error: 'Failed to fetch movies' }
    } 
}

export async function submitArticle(data) {
    

    try{
        if (!articles) await init()
        const result = await articles
            .insertOne(data)
        
            return {success: true, data}
    } catch (error) {
        console.log(error)
        return { success: false, error: true}
    } 

}