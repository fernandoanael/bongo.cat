import Analytics from 'analytics'
import googleTagManager from '@analytics/google-tag-manager'

export default function() {
    const analytics = new Analytics({
        app: 'BongoCat',
        plugins: [
            googleTagManager({
                containerId: 'UA-120277085-2'
            })
        ]
    })
}
