import { useState, useCallback } from 'react';
import {ReactFlow, applyNodeChanges, applyEdgeChanges, addEdge, Background, Controls, Panel } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import './App.css'
import CustomNode from "./reactFlowModules/CustomNode";


const initialNodes = [
  { id: 'n1', position: { x: 0, y: 0 }, data: { label: 'Node 1' } },
  { id: 'n2', position: { x: 100, y: 100 }, data: { label: 'Node 2' } },
  { id: 'n3', position: { x: 0, y: 200 }, data: { value: 'Node 3' }, type: 'custom' },
];

const nodeTypes = {custom: CustomNode}

const initialEdges = [{ id: 'n1-n2', source: 'n1', target: 'n2', type: 'smoothstep', label: 'edge' }];

export default function App() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
      (changes) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
      [],
  );
  const onEdgesChange = useCallback(
      (changes) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
      [],
  );
  const onConnect = useCallback(
      (params) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
      [],
  );

  return (
      <div style={{ width: '100vw', height: '100vh' }}>
        <ReactFlow
            nodes={nodes}
            nodeTypes={nodeTypes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView>
            <Panel className="test-panel" position="top-left"> <h1>HI</h1> <button>press me</button> </Panel>
            <Controls />
            <Background variant="dots" gap={12} size={1} />
        </ReactFlow>
      </div>
  );
}
