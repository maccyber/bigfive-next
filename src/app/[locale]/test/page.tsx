import { title } from "@/components/primitives";
import { getItems } from "@alheimsins/b5-johnson-120-ipip-neo-pi-r"
import { Survey } from "@/components/survey";

export default function TestPage() {
  const questions = getItems()
	return (
		<div>
			<h1 className={title()}>Test</h1>
      <Survey questions={questions} />
		</div>
	);
}
