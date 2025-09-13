type CardProps = {
	title: string;
	imageUrl: string;
	description: string;
};

const AlgoCard = ({ title, imageUrl, description }: CardProps) => {
	return (
		<div className="w-[300px] bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
			<img
				className="w-full h-48 object-cover"
				src={imageUrl}
				alt={title}
			/>
			<div className="p-4">
				<h2 className="text-xl font-semibold text-gray-800">{title}</h2>
				<p className="mt-2 text-gray-600 text-sm">{description}</p>
			</div>
		</div>
	);
};

export default AlgoCard;
