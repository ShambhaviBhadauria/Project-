import React from 'react';

async function getModerationArticles() {
    // Test Data
    let test = [
        { id: 1, title: 'Title A', author: 'Author A', volume: 0, extraDetails: 'Some extra details', responseEmail: '' },
        { id: 2, title: 'Title B', author: 'Author B', volume: 0, extraDetails: 'Some extra details', responseEmail: '' },
        { id: 3, title: 'Title C', author: 'Author C', volume: 0, extraDetails: 'Some extra details', responseEmail: '' },
        { id: 4, title: 'Title D', author: 'Author D', volume: 0, extraDetails: 'Some extra details', responseEmail: '' },
        { id: 5, title: 'Title E', author: 'Author E', volume: 0, extraDetails: 'Some extra details', responseEmail: '' },
    ];
    return test;
}

function AnalysisList() {
    const ModerationArticles = getModerationArticles();

    return (
        <>
            <ul className="w-full">
                {ModerationArticles.map((article) => (
                    <div key={article.id} className="card my-5 w-full bg-white rounded-lg p-4">
                        <div>
                            <h3 className="float-left mx-10 text-3xl pt-1 ">{article.title}</h3>
                            <h2 className="text-lg w-3/4 ">{article.author}</h2>
                        </div>
                        <div className="flex float-right">
                            <button className="bg-blue-500 text-white rounded p-2 mr-2">Add</button>
                        </div>
                        <p className="text-xs w-3/4 ">{article.extraDetails}</p>
                    </div>
                ))}
            </ul>

            {ModerationArticles.length === 0 && (
                <p className="text-center">There are no articles requiring analysis!</p>
            )}
        </>
    );
}

export default AnalysisList;
