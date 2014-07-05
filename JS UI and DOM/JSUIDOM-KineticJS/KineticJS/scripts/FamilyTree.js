/*jslint browser: true */
/*global Kinetic: true, Family: true */

// 02. Using Kinetic create a family tree.
function Node(mother, father, children) {
    'use strict';
    var i,
        child;
    this.mother = mother;
    this.father = father;
    this.children = children || [];
    this.isFemale = false;
    this.hasChild = function (name) {
        for (i = 0; i < this.children.length; i += 1) {
            child = this.children[i];
            if (child.mother === name || child.father === name) {
                return true;
            }
        }
    };
}

var nodeWidth = 120;
var nodeHeight = 60;
var widthStep = nodeWidth + 20;
var heightStep = 2 * widthStep;
var initialX = 450;

function findRoot(tree, dictionary) {
    'use strict';
    var root = null,
        mother,
        father,
        isRoot,
        length,
        i,
        j;

    for (i = 0, length = tree.length; i < length; i += 1) {
        mother = tree[i].mother;
        father = tree[i].father;
        isRoot = true;

        for (j = 0; j < length; j += 1) {
            if ((tree[j].hasChild(mother) || tree[j].hasChild(father)) && i !== j) {
                isRoot = false;
                break;
            }
        }

        if (isRoot) {
            root = tree[i];
            break;
        }
    }

    return dictionary[root.mother];
}

function addConnection(leftParentX, leftParentY, childX, childY, layer) {
    'use strict';
    var startX = leftParentX + nodeWidth * 1.25,
        endX = childX + nodeWidth / 2,
        startY = leftParentY + nodeHeight / 2 - 10,
        endY = childY,
        controlPointDx = Math.abs(endX - startX) / 10,
        controlPointDy = Math.abs(endY - startY),
        nodeConnection = new Kinetic.Shape({
            strokeWidth: 1,
            fill: '#77B300',
            stroke: '#77B300',
            drawFunc: function (context) {
                context.beginPath();
                context.moveTo(startX, startY);
                context.bezierCurveTo(
                    startX - controlPointDx,
                    startY + controlPointDy,
                    endX + controlPointDx,
                    endY - controlPointDy,
                    endX,
                    endY
                );
                context.strokeShape(this);
                context.beginPath();
                context.moveTo(endX + 5, endY - 5);
                context.lineTo(endX, endY);
                context.moveTo(endX - 5, endY - 5);
                context.lineTo(endX, endY);
                context.strokeShape(this);
            }
        });

    layer.add(nodeConnection);
}

function addNode(layer, coordX, coordY, text, radius) {
    'use strict';
    text = new Kinetic.Text({
        x: coordX,
        y: coordY,
        width: nodeWidth,
        padding: 10,
        text: text,
        fill: '#77B300',
        align: 'center'
    });
    var container = new Kinetic.Rect({
        x: coordX,
        y: coordY,
        width: nodeWidth,
        stroke: '#77B300',
        fill: '#AAF744',
        strokeWidth: 1,
        height: text.height(),
        cornerRadius: radius
    });

    layer.add(container);
    layer.add(text);
}

function addLine(coordX, coordY) {
    'use strict';
    var line = new Kinetic.Line({
        points: [0, 0, nodeWidth - widthStep, 0],
        stroke: '#77B300',
        strokeWidth: 2
    });

    line.move({
        x: coordX + widthStep,
        y: coordY + nodeHeight / 2 - 10
    });

    return line;
}

function drawFamilyTree(layer, root) {
    'use strict';
    var queue = [],
        levelStep = 100,
        node,
        child,
        paddingRight,
        length,
        i,
        line,
        xCoord;

    root.level = 0;
    root.initialX = initialX;
    queue.push(root);

    while (queue.length > 0) {
        node = queue.shift();

        for (i = 0, length = node.children.length; i < length; i += 1) {
            child = node.children[i];
            child.level = node.level + levelStep;
            child.num = i;
            paddingRight = 0;

            if (node.children.length > 1) {
                paddingRight = widthStep * (node.children.length - 1);
            }

            child.initialX = node.initialX + heightStep * i - paddingRight;
            queue.push(node.children[i]);
        }

        if (node.father) {
            addNode(layer, node.initialX, node.level, node.father || "", 5);
        }

        if (node.mother) {
            addNode(layer, node.initialX + widthStep, node.level, node.mother || "", 17);
        }

        if (node.father && node.mother) {
            line = addLine(node.initialX, node.level);
            layer.add(line);
        }

        for (i = 0, length = node.children.length; i < length; i += 1) {
            child = node.children[i];
            xCoord = child.initialX + nodeWidth / 2;

            if (child.father === null || child.isFemale) {
                xCoord += widthStep;
            }

            addConnection(node.initialX - 20, node.level, xCoord - 50, child.level - 1, layer);
        }
    }
}

window.onload = function () {
    'use strict';
    var stage = new Kinetic.Stage({
        container: 'kinetic-container',
        width: 1300,
        height: 1500
    }),
        layer = new Kinetic.Layer(),
        familyMembersData = [],
        dictionary = [],
        i,
        length,
        familyMember,
        root,
        leaf,
        name,
        mother,
        father,
        childName;

    for (i = 0, length = Family.familyMembers.length; i < length; i += 1) {
        familyMember = new Node(Family.familyMembers[i].mother, Family.familyMembers[i].father, Family.familyMembers[i].children);
        familyMembersData.push(familyMember);
    }

    for (i = 0, length = familyMembersData.length; i < length; i += 1) {
        mother = familyMembersData[i].mother;
        father = familyMembersData[i].father;
        dictionary[mother] = familyMembersData[i];
        dictionary[father] = familyMembersData[i];
    }

    for (name in dictionary) {
        familyMember = dictionary[name];

        for (i = 0, length = familyMember.children.length; i < length; i += 1) {
            childName = familyMember.children[i];

            if (dictionary[childName] && !(childName instanceof Node)) {
                familyMember.children[i] = dictionary[childName];
                if (dictionary[childName].mother === childName) {
                    dictionary[childName].isFemale = true;
                }
            } else if (!(childName instanceof Node)) {
                leaf = new Node(null, childName);
                dictionary[childName] = leaf;
                familyMember.children[i] = leaf;
            }
        }
    }

    root = findRoot(familyMembersData, dictionary);
    drawFamilyTree(layer, root);
    stage.add(layer);
};
