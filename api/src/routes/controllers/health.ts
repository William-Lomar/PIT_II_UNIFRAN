import { Application } from "express";

export function HealthController(app: Application) {
    console.log('/health');
    app.get('/health', (req, res) => {
        res.json({
            active: true,
            date: new Date()
        })
    })
}