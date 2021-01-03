// Use the above maze and modify your solution so it finds All the possible 
// exit paths through the Maze. To find all possible exit paths through the 
// maze, think about how many places you can move at each turn. Possibly up, 
// down, left or right?

// Notice that this maze has 3 exits paths. Your recursive function should 
// print all three of the paths with the proper directions. For example, 
// given the maze above, the program should output the following:

// Path to the exit: RRDDLLDDRRRRRR
// Path to the exit: RRDDRRUURRDDDD
// Path to the exit: RRDDRRRRDD

const findWayOutOfMaze = (maze, validPaths, winningPaths) => {
    // Setup defaults for params
    validPaths = validPaths || [
        { path: [], location: [0,0], prevLocations: [] }
    ];
    winningPaths = winningPaths || [];

    // Base Case
    if(winningPaths.length > 0) {
        winningPaths.map(path => path.path.join('')).join('\n');
    }

    // Function to determine if location has been previously visited
    const checkPrevMoves = (prevLocations, newLocation) => {
        let valid = true;
        prevLocations.map(loc => {
            if(loc[0] === newLocation[0] && loc[1] === newLocation[1]) valid = false;
        });
        return valid;
    };

    // Function that determines if path results in a win
    const isWinner = (location, winLocation) => {
        return location[0] === winLocation[0] && location[1] === winLocation[1];
    };

    // Collect new valid paths
    const newValidPaths = [];

    validPaths.map(path => {
        let locRow = path.location[0];
        let locCol = path.location[1];
        if(isWinner(path.location, [maze.length - 1, maze[0].length - 1])) {
            winningPaths.push(path);
        } else {
            // Handle right move
            if(
                locCol + 1 < maze[0].length &&
                maze[locRow][locCol + 1] !== '*' &&
                checkPrevMoves(path.prevLocations, [locRow, locCol + 1])
            ) {
                newValidPaths.push({
                    path: [...path.path, 'R'],
                    location: [locRow, locCol + 1],
                    prevLocations: [...path.prevLocations, path.location]
                })
            }
            // Handle down move
            if(
                locRow + 1 < maze.length &&
                maze[locRow + 1][locCol] !== '*' &&
                checkPrevMoves(path.prevLocations, [locRow + 1, locCol])
            ) {
                newValidPaths.push({
                    path: [...path.path, 'D'],
                    location: [locRow + 1, locCol],
                    prevLocations: [...path.prevLocations, path.location]
                });
            }
            // Handle left move
            if(
                locCol - 1 >= 0 &&
                maze[locRow][locCol - 1] !== '*' &&
                checkPrevMoves(path.prevLocations, [locRow, locCol - 1])
            ) {
                newValidPaths.push({
                    path: [...path.path, 'L'],
                    location: [locRow, locCol - 1],
                    prevLocations: [...path.prevLocations, path.location]
                });
            }
            // Handle up move
            if(
                locRow - 1 >= 0 &&
                maze[locRow - 1][locCol] !== '*' &&
                checkPrevMoves(path.prevLocations, [locRow - 1, locCol])
            ) {
                newValidPaths.push({
                    path: [...path.path, 'U'],
                    location: [locRow - 1, locCol],
                    prevLocations: [...path.prevLocations, path.location]
                });
            }
        }
    });
    return findWayOutOfMaze(maze, newValidPaths, winningPaths);
}