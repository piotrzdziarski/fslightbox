import { renderSourceMainWrapper } from "./renderSourceMainWrapper";
import { ABSOLUTED_CLASS_NAME, FULL_DIMENSION_CLASS_NAME } from "../../constants/classes-names";

export function renderSourceWrappersContainer(fsLightbox) {
    const { core: { sourcesPointerDown }, elements, props: { sources } } = fsLightbox;

    const sourceWrappersContainer = document.createElement('div');
    sourceWrappersContainer.className = `${ABSOLUTED_CLASS_NAME} ${FULL_DIMENSION_CLASS_NAME}`;
    elements.container.appendChild(sourceWrappersContainer);

    sourceWrappersContainer.addEventListener('pointerdown', sourcesPointerDown.listener);

    elements.sourceWrappersContainer = sourceWrappersContainer;

    for (let i = 0; i < sources.length; i++) {
        renderSourceMainWrapper(fsLightbox, i);
    }
}
