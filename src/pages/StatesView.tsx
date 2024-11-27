import ConfigPanel from "../components/ConfigPanel";
import { NodeCard } from "../components/NodeCard";

export function StatesView() {
  return (
    <div>
      <ConfigPanel open={true} />
      <NodeCard
        title="State 1"
        content="Content 1"
        status={false}
        pos={[100, 100]}
      />
      <NodeCard
        title="State 2"
        content="Content 2"
        status={false}
        pos={[300, 300]}
      />
      <NodeCard
        title="State 3"
        content="Content 3"
        status={true}
        pos={[500, 500]}
      />
    </div>
  );
}