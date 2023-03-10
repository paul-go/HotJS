
namespace Cover
{
	/** */
	export function coverHot()
	{
		const hot = new Hot({
			createElement(tagName)
			{
				return document.createElement(tagName);
			},
			createGlobalStyleSheet()
			{
				return {} as CSSStyleSheet;
			}
		});
	}
	
	/** */
	export function coverHotConnectedEvent()
	{
		const hot = new Hot();
		
		hot.get(document.body)(
			hot.section(
				hot.on("connected", () =>
				{
					console.log("connected");
				})
			)
		);
	}
	
	/** */
	export function coverHotStyleAttach()
	{
		const hot = new Hot();
		
		hot.style("DIV", {
			width: "100px",
			height: "100px",
			border: "10px solid green"
		}).attach();
		
		hot.get(document.body)(hot.div());
	}
	
	/** */
	export function coverHotShadow()
	{
		const hot = new Hot();
		hot.style("DIV", { borderRadius: "20px" });
		
		hot.get(document.body)(
			hot.div(
				"shadow-container",
				{
					border: "10px solid red",
					padding: "10px",
				},
				hot.shadow(
					hot.style(
						"DIV",
						{
							backgroundColor: "yellow"
						},
					),
					hot.div(
						"shadow-element-1",
						{
							width: "100px",
							height: "100px",
							border: "10px solid green"
						}
					)
				),
				hot.shadow(
					hot.div(
						"shadow-element-2",
						{
							width: "100px",
							height: "100px",
							border: "10px solid blue"
						}
					)
				)
			)
		);
	}
	
	/** */
	export function coverHotCssDeduplication()
	{
		const hot = new Hot();
		
		const insert = () =>
		{
			document.body.append(
				hot.div(
					hot.css(" P", { color: "red" }),
					hot.p(hot.text`para1`),
					hot.p(hot.text`para2`),
				)
			);
		};
		
		insert();
		insert();
	}
	
	/** */
	export function coverHotArrayValues()
	{
		const hot = new Hot();
		const div = hot.div(
			{
				width: ["error", "100%"]
			}
		);
		
		document.body.append(div);
		return () => div.style.width === "100%";
	}
	
	//@ts-ignore
	if (typeof module === "object") Object.assign(module.exports, { Cover });
}
