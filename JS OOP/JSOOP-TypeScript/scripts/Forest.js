var Forest = (function () {
    function Forest(allObjects) {
        this.allObjects = allObjects;
        this.forest = Forest.positionObjectsInForest(allObjects);
    }
    Forest.prototype.updateForest = function () {
        for (var i = 0; i < Forest.size; i += 1) {
            this.forest[i] = [];
        }

        for (var objIndex = 0; objIndex < this.allObjects.length; objIndex += 1) {
            var objectToPosition = this.allObjects[objIndex];
            var objectX = objectToPosition.position.x;
            var objectY = objectToPosition.position.y;

            if (objectToPosition.isDead) {
                this.allObjects.splice(objIndex, 1);
                objIndex--;
                continue;
            }

            if (this.forest[objectX][objectY]) {
                this.forest[objectX][objectY] = this.forest[objectX][objectY].health > objectToPosition.health ? this.forest[objectX][objectY] : objectToPosition;
            } else {
                this.forest[objectX][objectY] = objectToPosition;
            }
        }
    };

    Forest.positionObjectsInForest = function (objectsToPosition) {
        var positionedObjects = [];

        for (var i = 0; i < Forest.size; i += 1) {
            positionedObjects[i] = [];
        }

        for (var objIndex = 0, length = objectsToPosition.length; objIndex < length; objIndex += 1) {
            var objectToPosition = objectsToPosition[objIndex];
            var objectX = objectToPosition.position.x;
            var objectY = objectToPosition.position.y;

            if (positionedObjects[objectX][objectY]) {
                positionedObjects[objectX][objectY] = positionedObjects[objectX][objectY].health > objectToPosition.health ? positionedObjects[objectX][objectY] : objectToPosition;
            } else {
                positionedObjects[objectX][objectY] = objectToPosition;
            }
        }

        return positionedObjects;
    };

    Forest.prototype.getObjectString = function (x, y) {
        var object = this.forest[x][y];

        if (object) {
            if (object instanceof Array) {
                return object[this.indexToStringify++].toString();
            } else {
                return object.toString();
            }
        } else {
            return '';
        }
    };

    Forest.prototype.toString = function () {
        var result = '';

        for (var objIndex = 0, len = this.allObjects.length; objIndex < len; objIndex += 1) {
            if (result) {
                result += '\n';
            }

            result += '[ ' + this.allObjects[objIndex].position.x + ', ' + this.allObjects[objIndex].position.y + ' ] ';
            result += this.getObjectString(this.allObjects[objIndex].position.x, this.allObjects[objIndex].position.y);
        }

        return result;
    };

    Forest.prototype.moveAll = function () {
        for (var i = 0, length = this.allObjects.length; i < length; i += 1) {
            if (this.allObjects[i] instanceof Interfaces.IMovable) {
                this.allObjects[i].move(1, 1);
            }
        }
    };
    Forest.size = 40;
    return Forest;
})();
//# sourceMappingURL=Forest.js.map
