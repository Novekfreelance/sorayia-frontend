import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const UploadForm = () => {
	return (
		<div className="rounded border-2 border-dashed border-gray-100 grid w-full items-center gap-1.5 h-48">
      <Label htmlFor="picture">Clique to upload</Label>
      <Input className="bg-red-400" id="picture" type="file" />
    </div>
	)
}

export default UploadForm