function searchPodcast(keyword){
    if (keyword === "") return [];
    let mockArray = [1, 2, 3, 4, 5]
    let mockResults = mockArray.map((value) => {
        return {
            'id': value,
            'name': 'Podcast Name',
            'description': 'Something that describes podcast number' + value
        }
    });
    return mockResults;
}

module.exports = {searchPodcast}
