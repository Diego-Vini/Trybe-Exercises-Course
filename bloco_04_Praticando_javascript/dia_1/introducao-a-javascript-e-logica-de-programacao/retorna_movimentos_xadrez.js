let chessPiece = 'Bishop';

piece = chessPiece.toLowerCase();

switch(piece){
    case "king":
        console.log('Move-se na horizontal, vertical e diagonal uma casa por vez');
        break;
    case "queen":
        console.log('Move-se na horizontal, vertical e diagonal');
        break;
    case "bishop":
        console.log("Move-se em diagonal")
        break;
    case("knight"):
        console.touppercaselog('Move-se em forma de L(duas casas na horizontal e uma na vertical');
        break;
    case ('rook'):
        console.log('Move-se na vertical e horizontal');
        break;
    case ('pawn'):
        console.log('Move-se somente uma casa na horizontal');
        break;
    default:
        console.log('Peça não existe no xadrez')
}