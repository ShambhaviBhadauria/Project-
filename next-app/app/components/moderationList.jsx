import ListItemButtons from './listItemButtons'

//'Video: https://youtu.be/PAXWRgEo7Ns?list=PL4cUxeGkcC9jZIVqmy_QhfQdi6mzQvJnT'

async function getModerationArticles() {
    /*const res = await fetch('', {
        next: {
            revalidate: 0 //Re-fetches the data every time
        }
    }) //API call 
    return res.json()

    */

    //Test Data
    let test = [
                {id: 1, 
                title: 'Title A',
                author: 'Author A',
                volume: 0,
                extraDetails: 'Some extra detials',
                responseEmail: ''},
                
                {id: 2, 
                title: 'Title B',
                author: 'Author B',
                volume: 0,
                extraDetails: 'Some extra detials',
                responseEmail: ''},
        
                {id: 3, 
                title: 'Title C',
                author: 'Author C',
                volume: 0,
                extraDetails: 'Some extra detials',
                responseEmail: ''},

                {id: 4, 
                    title: 'Title D',
                    author: 'Author D',
                    volume: 0,
                    extraDetails: 'Some extra detials',
                    responseEmail: ''},

                {id: 5, 
                    title: 'Title E',
                    author: 'Author E',
                    volume: 0,
                    extraDetails: 'Some extra detials',
                    responseEmail: ''},
            ]
    return test
}

export default async function moderationList() {
    const ModerationArticles = await getModerationArticles()

    return (
        <>
        <ul className="w-full">
            {ModerationArticles.map((article) => (
                    <div key={article.id} className="card my-5 w-full bg-white rounded-lg p-4">
                    <div class>
                        <h3 className="float-left mx-10 text-3xl pt-1 ">{article.title}</h3>
                        <h2 className="text-lg w-3/4 ">{article.author}</h2>
                    </div>
                    <div className="flex float-right"> 
                        <ListItemButtons />
                    </div>
                    <p className="text-xs w-3/4 ">{article.extraDetails}</p>
                    </div>                   
            ))}
        </ul>

        {ModerationArticles.length === 0 && (
            <p className="text-center">There are no articles requireing moderation!</p>
        )}
        </>
    )
}